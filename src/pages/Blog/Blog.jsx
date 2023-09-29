import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-4xl font-bold mb-8">Welcome to Our Blog</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://via.placeholder.com/800x400" alt="Blog Post" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Blog Post Title 1</h2>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel urna eu libero fermentum iaculis.</p>
                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://via.placeholder.com/800x400" alt="Blog Post" className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">Blog Post Title 2</h2>
                        <p className="text-gray-700 mb-4">Sed ac risus sed sem lacinia lacinia. Vestibulum vehicula neque sit amet ligula vestibulum, ac egestas turpis porttitor.</p>
                        <a href="#" className="text-blue-500 hover:underline">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
