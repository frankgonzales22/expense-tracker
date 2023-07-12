

import { useForm } from "react-hook-form"
import { categories } from "../Models/Categories"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
    desc: z.string().min(3, { message: 'Description at least 3 characters' }).max(50),
    amount: z.number({invalid_type_error : 'Please input amount'}).min(0.01).max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({message : 'Choose category'})
    })
})



type ItemData = z.infer<typeof schema>
interface AddItemProps {
    onSubmit: (data: ItemData) => void
}


export const AddItem = ({ onSubmit }: AddItemProps) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ItemData>({ resolver: zodResolver(schema) })

    return (
        <div className="container">
            <form action=""
                onSubmit={handleSubmit(data => {
                    onSubmit(data);
                    reset();
                })}
            >
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Descriptions</label>
                    <input {...register('desc')} id="desc" type="text" className="form-control" />
                    {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input {...register('amount', { valueAsNumber: true })} id="amount" type="number" className="form-control" />
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select {...register('category')} id="category" className="form-select">
                        <option value="">All</option>
                        {categories.map(category => <option value={category} key={category}>{category}</option>)}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}

                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
