import Link from "next/link"
import Image from "next/image"

import check from "../../../../public/check.svg"
import relatorio

export default function HomePaciente(){
    return(
        <>
        <section>
            <nav>
                <ul>
                    <li>
                        <Link href="#">
                        <Image url={check} width={200} height={200} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <Image url={check} width={200} height={200} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <Image url={check} width={200} height={200} alt="" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
        </>
    )
}