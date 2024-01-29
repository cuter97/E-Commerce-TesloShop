import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
    params: {
        id: Category;
    }
}

export default function ({ params }: Props) {

    const { id } = params;
    const products = seedProducts.filter(prod => prod.gender === id);
    const productId = seedProducts.find(prod => prod.gender === id);

    const labels: Record<Category, string> = {
        'men': 'para Hombres',
        'women': 'para Mujeres',
        'kid': 'para niños',
        'unisex': 'para todos',
    }

    if (!productId) notFound();

    return (
        <>
            <Title
                title={`Articulos ${labels[id]}`}
                subtitle="Todos los productos"
            />

            <ProductGrid products={products} />
        </>
    )
}
