import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, getContact, deleteContact } from "../../actions/postAction";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewPost = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const like = useSelector(
        (state) => state.contact.contacts.filter(
            (post) => post.id == id
        )[0].like
    );
    let history = useHistory();


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
                <span
                    className="material-icons m-2 text-warning"
                    style={{ float: "right" }}
                    onClick={() => {
                        dispatch(deleteContact(id));
                        history.push("/");
                    }}
                >
                    delete_outline
                </span>
                <Link to={`/post/edit/${id}`}>
                    <span
                        className="material-icons m-2 text-success"
                        style={{ float: "right" }}
                    >
                        edit
                    </span>
                </Link>
                {like ?
                    <span
                        className="material-icons m-2 text-danger"
                        style={{ float: "right" }}
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        favorite
                        </span>
                    : <span
                        className="material-icons m-2 text-danger"
                        style={{ float: "right" }}
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        favorite_border
                        </span>
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
