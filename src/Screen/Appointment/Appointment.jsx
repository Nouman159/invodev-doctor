import React from 'react'

const doctors = [{
    name: "Bilal ", date: " 12-10-2024"
}]

const Appointment = () => {
    return (
        <div>
            <div className=" flex flex-col">
                <div className="mt-10">
                    <table className="rounded-lg border-separate border-spacing-y-4">
                        <thead>
                            <tr className="bg-[#FF6E40] uppercase text-sm leading-normal w-full text-white">
                                <th className="rounded-l-lg p-[2%] text-left text-[13px] w-[8%]">
                                    Patient Name
                                </th>
                                <th className=" p-[2%] text-left text-[13px] w-[8%]">
                                    Appointment Date
                                </th>

                                <th className="rounded-r-lg p-[2%] text-left text-[13px] w-[2%]">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((data, index) => (
                                <tr key={index}>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.name}
                                    </td>
                                    <td className="rounded-l-lg p-[2%] text-left text-[13px] w-[2%] bg-white">
                                        {data.date}
                                    </td>

                                    <td className="rounded-r-lg p-[2%] text-left text-[13px] w-[3%] bg-white">
                                        <div className="flex flex-row gap-4">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="blue"
                                                class="size-5 hover:scale-110 duration-300 cursor-pointer"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="red"
                                                class="size-5 hover:scale-110 duration-300 cursor-pointer"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Appointment