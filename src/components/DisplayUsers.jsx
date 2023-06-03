
import { useSelector } from "react-redux";
import styled from "styled-components";


const DisplayUsers = () => {

    const data = useSelector((state) => {
        return state.users;
    })
        
    console.log(data);
    
//now have aapde ahi data lay aavano che je aapne display ma dekhase. aapde data map thi lay aavsu
    // return <Wrapper> 
    // {
    //     data.map=((user,id ) => {
    //         return<li key={id}>{user}</li>;
    //     })
    // }
    // </Wrapper>


        // Mapping the data to render the list of users
        const userList = data.map((user, id) => {
            return <li key={id}>{user}</li>;
        });
    
        return <Wrapper>{userList}</Wrapper>;
    
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  1i{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    
    &:first-child{
    border-top: 1px solid #eee;
    }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default DisplayUsers;
