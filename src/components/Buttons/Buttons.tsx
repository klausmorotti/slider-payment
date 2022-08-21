type ButtonProps = {
    stage:number;
    fnBackSlide: () => void;
    fnNextSlide: () => void;
}

export const Buttons = ({ stage, fnBackSlide, fnNextSlide }: ButtonProps) => {
    return (
        <div className="w-full flex justify-center mt-10">
            <button className="w-40 bg-cyan-100 hover:bg-cyan-300 hover:ease hover:duration-500 mr-4 p-3 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed" onClick={fnBackSlide} disabled={stage == 0 ? true : false}>Voltar</button>
            <button className="w-40 bg-cyan-100 hover:bg-cyan-300 hover:ease hover:duration-500 ml-4 p-3 rounded-lg" onClick={fnNextSlide}>{stage == 2 ? 'Recomeçar' : 'Próximo'}</button>
        </div>
    )
}