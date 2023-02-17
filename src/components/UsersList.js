import styles from "./UsersList.module.css";
import UserItem from "./UserItem";
import Card from "../UI/Card"

const UsersList=(props) =>{
    if(props.data.length>0){
      return (
        <Card className={styles.users}>
          <ul>
              {props.data.map(user=> (
              <UserItem
                  key={user.id}
                  name={user.name}
                  age={user.age}
              />))}
          </ul>
        </Card>
      );
    }
}
export default UsersList;
