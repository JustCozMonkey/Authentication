export default function filterUpdate(searchParam: any, setSearchParams: any, key: string, value: string) {
    const newParams = new URLSearchParams(searchParam)
    const existingValues = newParams.getAll(key)
    if (!value) {
        newParams.delete(key)
    } else {
        if (existingValues.includes(value)) {
            newParams.delete(key)
            existingValues.filter(v => v !== value).forEach(v => newParams.append(key, v))
        }
        else {
            newParams.append(key, value)
        }
    }
    setSearchParams(newParams)
}