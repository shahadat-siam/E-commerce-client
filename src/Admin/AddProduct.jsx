import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';
import useRole from '../Components/hooks/useRole';
import useAxiosSecure from '../Components/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [role] = useRole()
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate()
  // console.log(role)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageLinks, setImageLinks] = useState([]);
//   console.log(imageLinks)

  if(role != 'Admin'){
    return
  }

  const onSubmit = async (data) => { 
    try {
      // Upload images to ImageBB and get URLs
      const uploadPromises = Array.from(selectedImages).map(async (file) => {
        const formData = new FormData();
        formData.append('image', file);
        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
          params: { key: 'd59270a9606976b64622bf85991f6c22' },
        });
        return response.data.data.url; // Get the image URL
      });

      const imageUrls = await Promise.all(uploadPromises);
      setImageLinks(imageUrls);

      // Prepare product data
      const productData = {
        title: data.title,
        category: data.category,
        price: data.price,
        size: data.size,
        color: data.color,
        description: data.description,
        images: imageUrls,
      };

      // console.log('Product Data:', productData);

      // Send product data to server
      await axiosSecure.post(`/product-add`, productData)
      toast.success('Product added successfully!');
      navigate('/')
    } catch (error) {
      console.error('Error uploading product:', error);
      alert('Failed to add product.');
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  return (
    <div className="max-w-lg mx-auto p-8 my-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-[#E90074] mb-8">Post a New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Product Title */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#E90074] focus:border-[#E90074] sm:text-sm"
          />
          {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            rows="4"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#E90074] focus:border-[#E90074] sm:text-sm"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description.message}</p>}
        </div>

        {/* Price */}
        <div className="mb-6">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price ($)</label>
          <input
            id="price"
            type="number"
            step="0.01"
            {...register('price', { required: 'Price is required' })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#E90074] focus:border-[#E90074] sm:text-sm"
          />
          {errors.price && <p className="text-red-600 text-sm">{errors.price.message}</p>}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#E90074] focus:border-[#E90074] sm:text-sm"
          >
            <option value="">Select a category</option>
            <option value="tshirt">T-shirt</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
          {errors.category && <p className="text-red-600 text-sm">{errors.category.message}</p>}
        </div>

        {/* Size */}
        <div className="mb-6">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">Available Sizes</label>
          <select
            id="size"
            {...register('size', { required: 'Size is required' })}
            multiple
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#E90074] focus:border-[#E90074] sm:text-sm"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          {errors.size && <p className="text-red-600 text-sm">{errors.size.message}</p>}
        </div>

        {/* Color */}
        <div className="mb-6">
          <label htmlFor="color" className="block text-sm font-medium text-gray-700">Available Colors</label>
          <input
            id="color"
            type="text"
            {...register('color', { required: 'Color is required' })}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#E90074] focus:border-[#E90074] sm:text-sm"
          />
          {errors.color && <p className="text-red-600 text-sm">{errors.color.message}</p>}
        </div>

        {/* Images */}
        <div className="mb-8">
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Images</label>
          <input
            id="images"
            type="file"
            multiple
            onChange={handleImageUpload}
            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#E90074]/10 file:text-[#E90074] hover:file:bg-[#E90074]/20"
          />
          {selectedImages.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {Array.from(selectedImages).map((image, index) => (
                <img key={index} src={URL.createObjectURL(image)} alt={`Selected ${index}`} className="w-full h-24 object-cover rounded-lg" />
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#E90074] text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#d10062] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E90074]"
        >
          <FaUpload className="inline-block mr-2" /> Post Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
