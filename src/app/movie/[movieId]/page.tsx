export default function MovieDetail({ params }: { params: { movieId: string } }) {
  return (
    <section className="w-screen h-screen bg-white">
      <h1 className="text-black/70">Title - {params.movieId}</h1>
    </section>
  );
}
