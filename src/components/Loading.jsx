const Loading = () => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center h-full animate-pulse">

            <div className="w-24 h-24 rounded-full bg-slate-200 mb-4 border-2 border-gray-100"></div>

            <div className="h-6 w-3/4 bg-slate-200 rounded-md mb-2"></div>

            <div className="h-3 w-1/4 bg-slate-100 rounded-md mb-4"></div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <div className="h-5 w-12 bg-emerald-50 rounded-full"></div>
                <div className="h-5 w-16 bg-emerald-50 rounded-full"></div>
                <div className="h-5 w-10 bg-emerald-50 rounded-full"></div>
            </div>

            <div className="mt-auto h-6 w-24 bg-slate-200 rounded-full"></div>

        </div>
    );
};
export default Loading;