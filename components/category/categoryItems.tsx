import {Dropdown} from "react-bootstrap";
import { useState } from 'react';
import Link from "next/link";

const CategoryItems = () => {
    const [categoris] = useState<IcategoryItem[]>([
    {name:'کارت گرافیک',slug:'graphic-card'},
    {name:'پردازنده',slug:'cpu'},
    {name:'مادربرد',slug:'mainboard'},
    {name:'پاور',slug:'power'},
    {name:'حافظه رم',slug:'ram'},
    {name:'کیس کامپیوتر',slug:'case'},
    {name:'هارد دیسک',slug:'hard'},
    {name:'خنک کننده',slug:'cooling'},
])

    return (
        <Dropdown.Menu align='end' className='text-end p-0 my-3 border-0 shadow' style={{width: '250px'}}>
            {categoris.map(item => (
                <Link href={`/products?category=${item.slug}`} key={item.slug}>
                    <Dropdown.Item as="button" className='py-3 display-1 border-bottom border-light'>
                        {item.name}
                    </Dropdown.Item>
                </Link>
            ))}
        </Dropdown.Menu>
    );
}

export default CategoryItems;