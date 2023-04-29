import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
//import { IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState, useEffect } from 'react';
import style from "../../Pages/Home/Home.module.css"
import { Link, useLocation } from 'react-router-dom';


const footerData= [
  {
    Icon:HomeOutlinedIcon,
    title:"Home",
    path:"/"
  },
  {
    Icon:SearchOutlinedIcon,
    title:"Search",
    path:"/Search"
  },
  {
    Icon:CategoryOutlinedIcon,
    title:"Category",
    path:"/Category"
  },
  {
    Icon:AccountCircleOutlinedIcon,
    title:" About",
    path:"/About"
  }

]

const Footer = () => {
  const location = useLocation();
  const [footerMenuSelect, setFooterMenuSelect]= useState("/")

  useEffect(() => {
    setFooterMenuSelect(location.pathname);
  }, [location]);

  return (
    <div className={style.footerContainer}>
      {footerData.map(({Icon,title, path},index)=>(
        <Link to={path}  key={index} ><div  onClick={()=>
          setFooterMenuSelect(path)
        } className={style.footerMenu}
        style={{
          color: footerMenuSelect === path? 'white':'rgb(34, 26, 26)'
        }}
        >
        <Icon/>
        <p>{title}</p>
      </div></Link>

      ))}
      
    </div>
  )
}
export default Footer