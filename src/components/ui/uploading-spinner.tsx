import localFont from 'next/font/local'

const local = localFont({
    src: '../../fonts/hefton/Hefton-FreeDemo.otf',
    display: 'swap',
})

function UploadingSpinner() {
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className={`loader ${local.className} text-4xl max-[1000px]:text-3xl max-[700px]:text-2xl tracking-wide`}>Uploading</span>
            
            <style jsx>
                {`
                    .loader {
                        display: inline-block;
                        position: relative;
                    }

                    .loader:after {
                        content: '';
                        height: 4px;
                        width: 0%;
                        display: block;
                        background: #FF6637;
                        animation: 3s lineGrow linear infinite;
                    }

                    @keyframes lineGrow {
                        to {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default UploadingSpinner;