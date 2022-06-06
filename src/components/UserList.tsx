import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useAction';
// import { useSelector } from 'react-redux';
import { useSelectorTyped } from '../hooks/useSelectorTyped';
// import { fetchUsers } from '../store/action-creators/user';



// можно было хук не создавать. Просто параметру state в useSelector задать тип RootState
 
const UserList: React.FC = () => {
    const {error, loading, users} = useSelectorTyped(state => state.user)
    const { fetchUsers } = useActions()
    
    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user => 
                <div>{user.name}</div>
                )}
        </div>
    );
};

export default UserList;