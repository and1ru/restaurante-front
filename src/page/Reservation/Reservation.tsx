import { SectionCard } from "../../components/SectionCard/SectionCard"

export const Reservation = () => {
    return (
        <div className="flex gap-5">
            <SectionCard imagen="" title="BOOK" url="/private/book" />
            <SectionCard imagen="" title="CONFIRM BOOK" url="/private/confirmBook" />
        </div>
    )
}