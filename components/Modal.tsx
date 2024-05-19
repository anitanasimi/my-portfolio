"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import Image from "next/image";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const title = searchParams.get("title");
  const pathname = usePathname();

  const project = projectsData.find((p) => p.title === title);

  return (
    <>
      {modal && project && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-4">
                <Image
                  src={project.imgModal1}
                  alt="Modal Image 1"
                  width={300}
                  height={200}
                />
                <Image
                  src={project.imgModal2}
                  alt="Modal Image 2"
                  width={300}
                  height={200}
                />
              </div>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.more}</p>
              <Link href={pathname}>
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 mt-4"
                >
                  Close Modal
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
