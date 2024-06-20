import { useContext } from 'react'
import { CartContext } from './context/cart'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Cart = () => {

    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


    return (
        <div className='lg:mx-20 lg:my-14 m-4'>
            <span>Home / Cart</span>
            <div className='my-10'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product </TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map((item) => {
                                return (
                                    <TableRow sx={{
                                        '&:last-child td, &:last-child th': { border: 0 }
                                    }} key={item.id}>
                                        <TableCell sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '7px'
                                        }} >
                                            <img className='w-[60px] h-[80px]' src={item.image} alt={item.title} />
                                            <h1>{item.title}</h1>
                                        </TableCell>
                                        <TableCell>${item.price}</TableCell>
                                        <TableCell>
                                            <div className='flex items-center gap-3'>
                                                <button
                                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                                    onClick={() => {
                                                        addToCart(item)
                                                    }}
                                                >
                                                    +
                                                </button>
                                                <p>{item.quantity}</p>
                                                <button
                                                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                                                    onClick={() => {
                                                        removeFromCart(item)
                                                    }}
                                                >
                                                    -
                                                </button>
                                            </div>

                                        </TableCell>
                                        <TableCell>${item.price * item.quantity}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            {
                cartItems.length > 0 ? (
                    <div className="flex flex-col justify-between items-center">
                        <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                        <button
                            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                            onClick={() => {
                                clearCart()
                            }}
                        >
                            Clear cart
                        </button>
                    </div>
                ) : (
                    <h1 className="text-lg font-bold">Your cart is empty brudda</h1>
                )
            }
        </div>



    );
}

export default Cart;