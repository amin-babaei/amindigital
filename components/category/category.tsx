import {Button, Dropdown} from "react-bootstrap";
import {BsFillGridFill} from "react-icons/bs";
import {useRouter} from "next/router";
import CategoryItems from "./categoryItems";
import { useEffect, useRef, useState} from "react";

const Category = () => {
    const [open,setOpen] = useState<boolean>(false)
    const initialRef: any = null;
    const outsideMenu = useRef(initialRef)
    const router = useRouter()

    const handleOpen = ():void => {
        setOpen(prev => !prev)
    }
    const closeOpenMenus = (e:any): void => {
        if(outsideMenu.current && setOpen && !outsideMenu.current.contains(e.target)){
          setOpen(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',closeOpenMenus)
    },[])
    useEffect(() => {
        if (open) {
            setOpen(!setOpen);
        }
      }, [router.asPath]);
    return (
        <>
            {router.pathname === '/' ? (
            <Dropdown show>
                <Button variant="light">
                    دسته بندی
                    <BsFillGridFill className='mx-2'/>
                </Button>
                <CategoryItems/>
            </Dropdown>
            ) : (
                    <Dropdown show={open} ref={outsideMenu}>
                        <Dropdown.Toggle variant="light" onClick={handleOpen}>
                            دسته بندی
                            <BsFillGridFill className='mx-2'/>
                        </Dropdown.Toggle>
                            <CategoryItems/>
                    </Dropdown>
            )}
        </>
    );
}

export default Category;