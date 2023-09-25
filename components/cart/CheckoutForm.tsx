import { memo, useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useDispatch, useSelector } from 'react-redux';
import { paymentSuccess, selectCartTotal } from '../../store/basketSlice';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import LocationMarker from './LocationMarker';

interface CheckoutFormProps {
    show: (value: boolean) => void;
    isCheckout: (value: boolean) => void;
}

interface FormValues {
    userName: string;
    email: string;
    phone: string;
    address: string;
}

const CheckoutForm = ({ show, isCheckout }: CheckoutFormProps) => {
    const [showMapModal, setShowMapModal] = useState(false);
    const [position, setPosition] = useState<L.LatLng | null>(null);

    const total = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    const { register, formState: { errors, isValid }, handleSubmit } = useForm<FormValues>({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            userName: '',
            email: '',
            phone: '',
            address: '',
        },
    });

    const handleShowMapModal = () => {
        setShowMapModal(true);
      };
    
      const handleCloseMapModal = () => {
        setShowMapModal(false);
      };

    const onSubmit = (data: FormValues) => {
        if (!position) {
            toast.error('لطفا محل سکونت خود را در نقشه مشخص کنید', {
                position: "top-center",
                style: {
                    background: 'red',
                    color: '#fff',
                },
            })
        } else {
            dispatch(paymentSuccess());
            Swal.fire({
                confirmButtonText: 'خروج', icon: 'success',
                title: 'خرید شما موفقیت آمیز بود',
                text: 'از اینکه مارا انتخاب کردید سپاس گذاریم',
            })
            show(false)
            isCheckout(false)
        }
    };
    
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    {...register("userName", {
                        required: "لطفا نام و نام خانوادگی خود را وارد کنید",
                        minLength: {
                            value: 7,
                            message: "نام کاربری باید حداقل 7 کاراکتر باشد"
                        },
                    })}
                />
                {errors.userName && (
                    <Form.Text className="text-danger">
                        {errors.userName.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="ایمیل"
                    {...register("email", {
                        required: "لطفا ایمیل خود را وارد کنید",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "ایمیل شما صحیح نیست"
                        },
                    })}
                />
                {errors.email && (
                    <Form.Text className="text-danger">
                        {errors.email.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="phone"
                    placeholder="شماره تماس"
                    {...register("phone", {
                        required: "لطفا شماره تماس خود را وارد کنید",
                        pattern: {
                            value: /09([0-9])-?[0-9]{4}-?[0-9]{4}/,
                            message: "شماره شما صحیح نیست",
                        },
                        maxLength: {
                            value: 11,
                            message: "شماره شما صحیح نیست",
                        }
                    })}
                />
                {errors.phone && (
                    <Form.Text className="text-danger">
                        {errors.phone.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mt-3" controlId="formBasicLocation">
                <Form.Control
                    as="textarea" 
                    rows={3}
                    placeholder="آدرس"
                    {...register("address", { required: 'لطفا آدرس دقیق خود را وارد کنید' })}
                />
                {errors.address && (
                    <Form.Text className="text-danger">
                        {errors.address.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Button variant="primary" onClick={handleShowMapModal} className='mt-3 mb-1'>
                انتخاب روی نقشه
            </Button>
            {position && (
                <MapContainer center={position} zoom={15}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker setPosition={setPosition} center={position} />
                </MapContainer>
            )}
            <Modal size='xl' show={showMapModal} onHide={handleCloseMapModal}>
                <Modal.Header closeButton />
                <Modal.Body style={{ height: 'calc(100vh - 200px)' }}>
                    <MapContainer center={position ? position : [36.32, 59.53]} zoom={15}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker setPosition={setPosition} center={position} />
                    </MapContainer>
                </Modal.Body>
            </Modal>
            <Button type='submit' disabled={!isValid} className='position-absolute bottom-0 end-0 w-50' variant='success' style={{ borderRadius: '0', padding: '15px 0' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IRR' }).format(total).replace("IRR", "تومان")}
            </Button>
        </Form>
    )
}

export default memo(CheckoutForm)