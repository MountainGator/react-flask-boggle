const Form = ({formData, setData, handleSubmit}: |{guess: string} |any) => {
    const handleChange = (e: any) => {
        setData((data: any) => ({guess: e.target.value}))
    }

    return (
        <section className="container text-center">
            <form className="row justify-content-start mb-3">
                <label className="col-1 ms-lg-auto" htmlFor="guess"><strong>Guess:</strong></label>
                <input className="col-4 me-lg-auto" name="guess" id="guess" onChange={(e) => handleChange} />
            </form>
            <div className="row justify-content-center">
                <button className="btn btn-primary col-3" onClick={handleSubmit()}>
                    Submit
                </button>
            </div>
        </section>
    )
}

export default Form;