import React, { useCallback, useState } from 'react'

const useCustomToggle = (initialState = false) => {

    const [state , setState] = useState<boolean>(initialState);
    const toggle = useCallback(()=>{
        setState((prev)=> !prev);
    },[])

  return [state , toggle] as const;
}

export default useCustomToggle