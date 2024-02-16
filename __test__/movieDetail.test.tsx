import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MovieDetail from "@/app/movie/[movieId]/page";

describe("Page", () => {
  const movieId = "7331jcsay2";
  it("renders a heading", () => {
    render(<MovieDetail params={{ movieId }} />);

    const upcomingMoviesTitle = screen.queryByText("Title - " + movieId);

    expect(upcomingMoviesTitle).toBeInTheDocument();
  });
});
