
import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import {LoadingBUtton} from "../components/LodingBUtton"
export const Publish = () => {
    const [title, setTitle] = useState("");
    const [desciption, setdesciption] = useState("");
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();

    const handlePublish = async () => {
        if (loading) return;   

        setLoading(true);  
     
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, 
            {
                title,
                content: desciption
            }, 
            {
                headers: { "Authorization": localStorage.getItem("token") }
            });

            navigate(`/blog/${response.data.id}`);
        } catch (error) {
            console.error("Error publishing post:", error);
        } finally {
           setLoading(false); 
        }
    };

    return (
        <div>
            <Appbar />
            <div className="flex justify-center w-3/4">
                <div className="max-w-screen-lg w-3/4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 mt-10">
                        Your message
                    </label>
                    <textarea
                        id="message"
                        onChange={(e) => setTitle(e.target.value)}
                        className="block p-2.5 w-full text-sm rounded-lg border border-gray-200 placeholder:text-slate-200 text-xl font-bold focus:outline-none"
                        placeholder="Title"
                    ></textarea>
                    <div className="mt-5">
                        <TextEditor onChange={(e) => setdesciption(e.target.value)} />
                        <button
                            type="submit"
                            onClick={handlePublish}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            disabled={loading}  
                        >
                            {loading ? <LoadingBUtton /> : "Publish post"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50    ">
             
            <div className="px-4 py-2 bg-white rounded-b-lg  ">
                <label className="sr-only">Publish post</label>
                <textarea   onChange={onChange}   id="editor" rows={8} className=" focus:outline-none block w-full p-3 text-sm text-gray-800 bg-white     dark:text-gray-800  " placeholder="Write an article..." required ></textarea>
            </div>
        </div>
       
    </form>

}