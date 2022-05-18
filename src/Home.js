import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Journey of the BlueEyeGod', Body: 'It all started in March 20th 2021', author: 'BlueEyeGod', id: 1},
        { title: 'Journey of Melford The Great', Body: 'It all started in March 20th 2021', author: 'Melford', id: 2},
        { title: 'Journey of Eke The Great', Body: 'It all started in March 20th 2021', author: 'Eke', id: 3},
        { title: 'Journey of Pavlo The Great', Body: 'It all started in March 20th 2021', author: 'Pavlo', id: 4},
        { title: 'Journey of  Otuden The Great', Body: 'It all started in March 20th 2021', author: 'Otuden', id: 5}
    ]);

    return (  
        <div className="home">
            {blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{ blogs.title }</h2>
                    <p>Written by {blogs.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;