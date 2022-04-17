import React, {useState} from 'react';

export interface UsernameProps {

}

const dummyRegistered = [
    "abhishek",
    "sruthi"
];


const Usernames = (props: UsernameProps) => {

    const [registeredNames, setRegisteredNames] = useState<string[]>([]);

    React.useEffect(() => {
        // fetch all registered Usernames
        setRegisteredNames(dummyRegistered);

    }, []);

    return (
        <div>
            List of registered usernames
            <ul>
                {
                    registeredNames.map(rn => {
                        return (<li><RegisteredName name={rn}/></li>)
                    })
                }
            </ul>
            
        </div>
    )
}

export interface RegisteredNameProps {
    name: string;
}

const RegisteredName = (props: any) => {
    const {name} = props;
    return (
        <div> {name}</div>
    )
}

export default Usernames;