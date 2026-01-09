import React from 'react';
import EInkCard from './EInkCard';
import { Book, Clock, MoreHorizontal } from 'lucide-react';

const LibraryGrid = () => {
  const books = [
    { title: "Design Systems", author: "A. K. Smith", progress: 80, cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300" },
    { title: "The Mono Type", author: "J. Doe", progress: 12, cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=300" },
    { title: "Grid Theory", author: "M. Vignelli", progress: 100, cover: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=300" },
    { title: "Analog Future", author: "D. Epstein", progress: 45, cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300" },
    { title: "Quiet Patterns", author: "C. Alexander", progress: 5, cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300" },
    { title: "Black & White", author: "R. Capa", progress: 0, cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book, i) => (
        <div key={i} className="group cursor-pointer">
            <EInkCard className="aspect-[2/3] mb-3 shadow-[4px_4px_0px_black] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_black] transition-all">
                <div className="absolute inset-0 grayscale contrast-125 brightness-110">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                {/* Progress Overlay */}
                {book.progress > 0 && book.progress < 100 && (
                    <div className="absolute bottom-0 left-0 h-1 bg-black" style={{ width: `${book.progress}%` }} />
                )}
                {book.progress === 100 && (
                    <div className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-1 uppercase">
                        Read
                    </div>
                )}
            </EInkCard>
            <div className="pr-2">
                <h3 className="font-serif font-bold text-lg leading-tight truncate group-hover:underline decoration-1 underline-offset-4">{book.title}</h3>
                <p className="font-sans text-xs uppercase tracking-wider text-stone-600 truncate">{book.author}</p>
            </div>
        </div>
      ))}
      
      {/* Add New Placeholder */}
      <EInkCard className="aspect-[2/3] mb-3 flex flex-col items-center justify-center border-dashed border-2 border-stone-400 bg-transparent shadow-none hover:border-black hover:bg-white transition-colors cursor-pointer group">
          <Book className="h-8 w-8 text-stone-400 group-hover:text-black mb-2" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-black">Browse Store</span>
      </EInkCard>
    </div>
  );
};

export default LibraryGrid;