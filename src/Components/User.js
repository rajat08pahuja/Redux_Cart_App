import React, { useEffect } from 'react';
import { userFetchMiddleWare } from "../redux/user/userFetchMiddleWare";
import { connect } from "react-redux";

function User(props) {
    const { loading, error, users } = props;

    useEffect(async () => {
        props.fetchUser();
    }, [])

    return (
        <div>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> :
                <>
                    <h2>User List</h2>
                    {users.map((user) => {
                        return (
                            <li
                                style={{ listStyle : "none" }}
                                key={user.id}
                            >{user.name}</li>
                        )
                    })}
                </>
            }
        </div>
    )
}

const mapStateToProps = store => {
    return store.User;
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: () => {
            return dispatch(userFetchMiddleWare);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
