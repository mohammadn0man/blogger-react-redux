import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updatePost } from "../../actions/postAction";
import { useHistory, useParams } from "react-router-dom";

const EditPost = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post);
    const [title, setName] = useState("");
    const [content, setEmail] = useState("");
    const [category, setPhone] = useState("");

    useEffect(() => {
        if (post != null) {
            setName(post.title);
            setPhone(post.category);
            setEmail(post.content);
        }
        dispatch(getPost(id));
    }, [post]);

    const onUpdatePost = (e) => {
        e.preventDefault();

        const update_post = Object.assign(post, {
            title: title,
            category: category,
            content: content,
        });

        dispatch(updatePost(update_post));
        history.push("/")
    };
    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-dark text-white">Update Post</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdatePost(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={title}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={category}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Enter Your E-mail Address"
                            value={content}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditPost;
