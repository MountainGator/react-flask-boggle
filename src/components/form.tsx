const Form = ({formData, setData}: |{guess: string} |any) => {
    const handleChange = (e: any) => {
        setData((data: any) => {guess: e.target.value})
    }

    return (
        <form>
            <label htmlFor="guess">Guess</label>
            <input name="guess" id="guess" onChange={(e) => handleChange} value={formData.guess} />
        </form>
    )
}

export default Form;