import React, {useState} from "react";

export const Modal = ({closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState] = useState(defaultValue || {
        subject: "",
        recipient: "",
        message: "",
    });

    const [errors, setErrors] = useState ("")

    const validateForm = () => {
        if(formState.subject && formState.recipient && formState.message){
            setErrors("")
            return true;
        }else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);

        closeModal();
    };

    return (
        <div 
            className="fixed z-[1] w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center left-0 top-0" 
            onClick={(e) => {
                if(e.target.className==="fixed z-[1] w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center left-0 top-0")

                closeModal();
            }}
        >
            <div className="bg-[white] w-[25em] p-8 rounded-[5px]">
                <form>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-black text-sm font-bold mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100"
                            placeholder="Enter Subject" value={formState.subject} onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="recipient" className="block text-black text-sm font-bold mb-2">
                            Recipient
                        </label>
                        <input
                            type="text"
                            id="recipient"
                            name="recipient"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-green-100"
                            placeholder="Enter Recipient" value={formState.recipient} onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-black text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-yellow-100 resize-y"
                            placeholder="Enter Message"
                            value={formState.message} onChange={handleChange}>  
                        </textarea>
                    </div>
                    {errors && <div className="bg-[#f8d7da] text-[#df4759] mb-4 p-2 rounded-[0.3rem]">{`Please include: ${errors}`}</div>}
                    <button className="bg-accent-b hover:bg-accent-a text-white font-bold py-2 px-4 rounded-full"
                    onClick={handleSubmit}>
                        Submit

                    </button>
                </form>
            </div>
        </div>
    );
};

