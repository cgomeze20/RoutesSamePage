import React from "react";
import { NavLink, Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getAllUsers } from "../users";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();

  const users = getAllUsers();
  const filter = searchParams.get('filter') ?? ''

  const handleFilter = (e) =>{
    setSearchParams({filter: e.target.value})
  }

  return (
    <div>
      <h1>This is a Users screen</h1>

      <input type="search" value={filter} onChange={handleFilter}  placeholder="Search user..." />

     <div style={{display:'grid', gridTemplateColumns:'1fr 1fr',border:'1px solid #ddd'}}>
     <ul>
        {users.filter(user =>{
          if(!filter) return true;

          const name = user.name.toLowerCase()
        return name.includes(filter.toLowerCase())
        })        
        .map((user) => (
          <li key={user.id} >
            <h2>
              <NavLink style={{textDecoration:'none'}} to={user.id.toString() + location.search}>{user.name}</NavLink>
            </h2>
          </li>
        ))}
      </ul>

          <article style={{border:'1px solid #ccc', padding:'10px', background:'#eee'}}>
            <Outlet/>
          </article>

     </div>
    </div>


  );
};
