import Link from "next/link";

function LeftSidebar() {
    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                <Link
                href={`/`}
                >
                </Link>
                <p>Fin</p>

            </div>

        </section>
    )
}

export default LeftSidebar;