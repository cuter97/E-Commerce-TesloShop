'use server'

import prisma from '@/lib/prisma';
import { Product, ProductImage } from '@prisma/client';

export const getProductBySlug = async (slug: string): Promise<Product> => {
    try {
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: {
                        url: true
                    }
                }
            },
            where: {
                slug
            }
        });

        if (!product) return null;

        return {
            ...product,
            images: product.ProductImage.map((img: ProductImage) => img.url)
        }

    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener producto por slug');
    }
}