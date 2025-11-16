function SmallerTabs({icon: Icon, title}) {
  return (
    <div>
        <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            <Icon className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 font-medium text-lg">{title}</span>
        </button>
    </div>
  )
}

export default SmallerTabs