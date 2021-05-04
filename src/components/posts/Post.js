import React from "react";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/postAction";
import { useDispatch } from "react-redux";

const Post = ({ contact, selectAll }) => {
    const dispatch = useDispatch();
    const { title, category, content, id } = contact;
    return (
        <tr>
            <td className="align-middle">
                <div className="custom-control custom-checkbox">
                    <input
                        checked={selectAll}
                        type="checkbox"
                        className="custom-control-input"
                    />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <div className="card-body">
                    <h4 className="card-title">
                        {title}
                    </h4>
                    <p className="card-title">
                        {"Category : " + category}
                    </p>
                    <p className="card-text">
                        {content.length > 300 ? content.substring(0, 299) + "  . . . . ." : content}
                    </p>
                    <div>
                        <Link to={`/post/view/${id}`} className="btn btn-light ml-auto">
                            View Full Post
                        </Link>
                    </div>
                </div>
            </td>
            <td className="actions align-middle">
                <Link to={`/post/edit/${id}`}>
                    <span className="material-icons mr-2 text-warning">edit</span>
                </Link>
                <span
                    className="material-icons  text-danger"
                    onClick={() => dispatch(deleteContact(id))}
                >
                    delete_outline
                </span>
            </td>
        </tr>
    );
};

export default Post;
