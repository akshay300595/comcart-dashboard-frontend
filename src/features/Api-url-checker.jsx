import { useState } from "react";
import "./Api-url-checker.css"
import urlService from "../services/url-checker.service";
import { useGetRequestEndpoint, useMutationRequestEndpoint } from "../hooks/useRequestEndpoint";

const ApiUrlChecker = () => {
    const [urlInput, setUrlInput] = useState('');
    const [payload, setPayload] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('GET')

    const { data, isLoading: getMethodLoading, error: getMethodError, isErrorgetMethodIsError, refetch: getMethodRefetch } = useGetRequestEndpoint({
        key: ['getRequest', urlInput],
        serviceFn: () => urlService.makeGetRequest(urlInput)
    })


    const { mutate, isLoading: mutationIsLoading, isError: mutationIsError, error: mutationError } = useMutationRequestEndpoint();

    const handleInput = (e) => {
        setUrlInput(e.target.value);
    }

    const handleSubmit = (e) => {
    
        e.preventDefault();
        switch (selectedMethod) {
            case 'GET':
                getMethodRefetch();
                return;

            case 'POST':
                console.log(payload)
                mutate({
                    serviceFn: (payload) => urlService.makePostRequest(urlInput,payload),
                    payload: JSON.parse(payload)
                })
                return; 
            case 'PATCH':
                mutate({
                    serviceFn: (payload) => urlService.makePatchRequest(urlInput, payload),
                    payload: JSON.parse(payload)
                });
                return;
            case 'DELETE':
                mutate({
                    serviceFn: (payload) => urlService.makeDeleteRequest(urlInput, payload),
                    payload: payload ? JSON.parse(payload) : null
                })
                return 
        }

    }

    const handleMethodChange = (e) => {
        setSelectedMethod(e.target.value)
    }

    const handlePayloadChange = (e) => {
        setPayload(e.target.value)
    }

    return (
        <>
            <div className="main-container">
                <label htmlFor="" className="url-input-label">Selected Method:</label>
                <select name="" id="" value={selectedMethod} onChange={handleMethodChange} className="method-dropdown">
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PATCH">PATCH</option>
                    <option value="DELETE">DELETE</option>
                </select>
                <form onSubmit={(e) => handleSubmit(e)} className="url-checker-form">
                    <label className="url-input-label">Enter API URL:</label>
                    <input type='text' value={urlInput} name={'endPoint'} onChange={handleInput} className="url-inputbox" />

                    <label className="url-input-label">Enter Payload:</label>
                    <textarea className="payload-area" value={payload} onChange={handlePayloadChange}></textarea>

                    <button type="submit" className="submit-cta"> Hit Endpoint </button>
                </form>
            </div>

        </>
    )
}

export default ApiUrlChecker