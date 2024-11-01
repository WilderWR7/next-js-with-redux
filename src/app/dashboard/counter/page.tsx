import { CartCounter } from "@/shopping-cart"

export const metadata = {
    title: 'PageCounter',
    description: 'PageCounter',
}

export default function PageCounter() {
    
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Productos en el carrito</span>
            <CartCounter value={20} />
        </div>
    )
}
