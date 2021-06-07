import { useState } from 'react'


export default function Terms() {

    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(!check)
    }

    const handleOk = () => {
        {check ? window.alert('Enjoy your stay here') : window.alert('wrong choice')}
    }


    return(
        <div>
            <p>If you accept the following terms you're agree with the fact that your life is now ours</p>
            <input onChange={handleCheck} type="checkbox" name="checkterms" id="checkterms" />
            <button onClick={handleOk} >Ok</button>
        </div>
    )
};
