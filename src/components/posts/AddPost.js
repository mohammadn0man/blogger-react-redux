import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/postAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddPost = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createPost = (e) => {
        e.preventDefault();
        const new_post = {
            id: shortid.generate(),
            title: name,
            category: phone,
            content: email,
        };
        dispatch(addPost(new_post));
        history.push("/");
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-dark text-white">Add a Post</div>
            <div className="card-body">
                <form onSubmit={(e) => createPost(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Category"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            placeholder="Content"
                            required
                            rows="5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Publish
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
