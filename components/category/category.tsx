import {Button, Dropdown} from "react-bootstrap";
import {BsFillGridFill} from "react-icons/bs";
import CategoryItems from "./categoryItems";
import { useEffect, useRef, useState} from "react";
import { usePathname, useSearchParams } from 'next/navigation'

const Category = () => {
    const [open,setOpen] = useState<boolean>(false)
    const initialRef: any = null;
    const outsideMenu = useRef(initialRef)
    const pathname = usePathname()
    const params = useSearchParams()
    const handleOpen = ():void => {
        setOpen(prev => !prev)
    }
    const closeOpenMenus = (e:Event): void => {
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
      }, [pathname,params]);
    return (
        <>
            {pathname === '/' ? (
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