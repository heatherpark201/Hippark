import { useState } from "react";
import { useDispatch } from "react-redux";

export function useInput(initialEntry) {
    const [entry, setEntry] = useState(initialEntry);
    const onChange = (e) => setEntry(e.target.value);
    return [entry, onChange];
}

export function useSubmit({ createAction, action, validate, onSuccess}) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    if (!action) {
        action = createAction?.();
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const errors = validate?.();
        if (errors) {
            setErrors(errors);
        } else {
            setErrors([]);

            return dispatch(action).then(
                onSuccess,
                async (result) => {
                    let data;
                    try {
                        data = await result.clone().json();
                    } catch {
                        data = await result.text();
                    }
                    if (data?.errors) {
                        setErrors(data.errors);   
                    } else if (data) {
                        setErrors([data]);
                    } else {
                        setErrors([result.statusText]);
                    }
    
                }
            )
        }
    }

    return [errors, onSubmit];
}