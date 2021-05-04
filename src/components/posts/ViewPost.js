import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../actions/postAction";
import { getContact } from "../../actions/postAction";
import { useParams } from "react-router-dom";

const ViewPost = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [like, setLike] = useState("");

    useEffect(() => {
        if (contact != null) {
            setTitle(contact.title);
            setCategory(contact.category);
            setContent(contact.content);
            setLike(contact.like);
        }
        dispatch(getContact(id));
    }, [contact]);

    return (
        <div className="card shadow">
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                {like ?
                    <span
                        className="material-icons text-danger"
                        style={{ float: "right" }}
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        favorite
                        </span> :
                    <span
                        className="material-icons text-danger"
                        style={{ float: "right" }}
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        favorite_border
                        </span>
                }
                <h5 className="card-title">
                    {"Category : " + category}
                </h5>
                <div style={{ whiteSpace: 'pre-line' }}>
                    <p className="card-text">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ViewPost;
