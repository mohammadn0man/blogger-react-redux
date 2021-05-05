import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "./Post";
import {
    selectAllPost,
    clearAllPost,
    deleteAllPost,
} from "../../actions/postAction";

const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector((state) => state.contact.contacts);
    const selctedContcats = useSelector(
        (state) => state.contact.selectedContacts
    );

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllPost(contacts.map((contact) => contact.id)));
        } else {
            dispatch(clearAllPost());
        }
    }, [selectAll]);

    return (
        <div>
            {selctedContcats.length > 0 ? (
                <button
                    className="btn btn-danger mb-3"
                    onClick={() => dispatch(deleteAllPost())}
                >
                    delete all
                </button>
            ) : null}
            <table className="table shadow">
                <thead className="bg-head text-white">
                    <tr>
                        <th className="text-center">
                            <div className="custom-control custom-checkbox">
                                <input
                                    id="selectAll"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => setSelectAll(!selectAll)}
                                />
                                <label
                                    htmlFor="selectAll"
                                    className="custom-control-label"
                                ></label>
                            </div>
                        </th>
                        <th className="text-center">All Feeds</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Post contact={contact} key={contact.id} selectAll={selectAll} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Contacts;
