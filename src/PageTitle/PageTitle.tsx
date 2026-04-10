type PageTitleType = {
    value: string
}

export function PageTitle({value}: PageTitleType) {
    return (
        <div>
            <h1>{value}</h1>
        </div>
    )
}
