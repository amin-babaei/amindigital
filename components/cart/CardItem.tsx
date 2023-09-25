import Image from 'next/image';
import { Button, Card } from 'react-bootstrap';
import { BsDashLg, BsFillTrashFill, BsPlusLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeItem } from '../../store/basketSlice';
import toast from 'react-hot-toast';

const CardItem = ({ item }: { item: Product }) => {
    const dispatch = useDispatch();

    const removeItemFromBasket = (product: Product, title: string): void => {
        dispatch(removeItem(product));
        toast.error(`${title} از سبد خرید حذف شد`, {
            position: "top-center",
            icon: '😥',
            style: {
                background: 'red',
                color: '#fff',
            },
        });
    };

    const increment = (id: string): void => {
        dispatch(incrementQuantity({ id }));
    };

    const decriment = (id: string): void => {
        dispatch(decrementQuantity({ id }));
    };

    return (
        <Card className='border-0 shadow-sm w-100 mb-3 position-relative'>
            <Card.Body dir='rtl' className='d-flex justify-content-between align-items-center'>
                <Button variant='danger' size='sm' onClick={() => removeItemFromBasket(item, item.title)}>
                    <BsFillTrashFill className='text-white' />
                </Button>
                <div className='w-25'>
                    <h6 className='small' style={{ fontSize: '12px' }}>{item.title}</h6>
                </div>
                <div className='w-25 h-100 mx-2 position-relative'>
                    <Image unoptimized loader={() => `${process.env.BASE_URL}/${item.images[0]}`}
                        fill src={`${process.env.BASE_URL}/${item.images[0]}`}
                        alt={item.title} />
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Button variant='primary' size='sm' onClick={() => increment(item._id)}>
                        <BsPlusLg className='text-white' />
                    </Button>
                    <p className='my-1'>{item.quantity}</p>
                    <Button variant='danger' size='sm' onClick={() => decriment(item._id)}
                        disabled={item.quantity === 1}>
                        <BsDashLg className='text-white' />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardItem