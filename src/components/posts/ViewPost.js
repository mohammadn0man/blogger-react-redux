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
    const like = useSelector(
        (state) => state.contact.contact.like
    );

    useEffect(() => {
        if (contact != null) {
            setTitle(contact.title);
            setCategory(contact.category);
            setContent(contact.content);
        }
        dispatch(getContact(id));
    }, [contact]);

    return (
        <div className="card shadow">
            <div className="card-body">
                {like ?
                    <span
                        className="material-icons text-danger"
                        style={{ float: "right" }}
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        favorite
                        </span>
                    : null
                }
                {!like ?
                    <span
                        className="material-icons text-danger"
                        style={{ float: "right" }}
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        favorite_border
                        </span>
                    : null
                }
                <h2 className="card-title">
                    {title}
                </h2><h5 className="card-title">
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
