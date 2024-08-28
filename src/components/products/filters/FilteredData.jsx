import { Checkbox, Slider, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components";

const FilteredData = ({
    title,
    data,
    type,
    dataCheckBox,
    selectedTypes,
    onFilterChange
}) => {
    const handleCheckboxChange = (value) => {
        const updatedValues = selectedTypes.includes(value)
            ? selectedTypes.filter(v => v !== value)
            : [...selectedTypes, value];

        onFilterChange(updatedValues);
    };
    const handleTabChange = (value) => {
        onFilterChange(value);
    };
    return (
        <div className="border p-8 border-[#e6e6e6] mt-[40px]">
            <span className="block mb-8 text-base font-semibold">{title}</span>
            {type === "colors" ? (
                <Tabs className="w-full">
                    <TabsList className="flex flex-wrap justify-start gap-3">
                        {data && data.map((color, i) => (
                            <TabsTrigger key={i} value={color} onClick={() => handleTabChange(color)} className="text-primary border border-primary rounded-none p-2 data-[state=active]:bg-[#dbdbdb]">
                                <span className={`block w-[30px] h-[30px] ${color}`} />
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {data && data.map((color, i) => (
                        <TabsContent key={i} value={color} className="w-full">
                            <span className={`block w-full h-[30px] ${color}`} />
                        </TabsContent>
                    ))}
                </Tabs>
            ) : type === "slider" ? (
                <Slider
                    defaultValue={[0, 50000]}
                    size="1"
                    max={50000}
                    step={500}
                    onValueChange={onFilterChange}
                />
            ) : type === "checkbox" ? (
                <>
                    {dataCheckBox && dataCheckBox.map((item, i) => (
                        <Checkbox
                            key={i}
                            label
                            title={item}
                            checked={selectedTypes.includes(item)}
                            onChange={() => handleCheckboxChange(item)}
                        />
                    ))}
                </>
            ) : (
                <Tabs className="w-full">
                    <TabsList className="flex flex-wrap justify-start gap-2">
                        {data && data.map((item, i) => (
                            <TabsTrigger key={i} value={item} onClick={() => handleTabChange(item)} className="bg-transparent text-primary border border-primary rounded-none px-3 py-3 data-[state=active]:bg-yellow-500">
                                {item}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {data && data.map((item, i) => (
                        <TabsContent key={i} value={item}>{item}</TabsContent>
                    ))}
                </Tabs>
            )}
        </div>
    )
}
export default FilteredData;