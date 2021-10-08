
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.Entities;
using System.Diagnostics.CodeAnalysis;

namespace MoviesAPI;
public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {

    }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasPostgresExtension("postgis");

        modelBuilder.Entity<MoviesActors>()
            .HasKey(x => new { x.ActorId, x.MovieId });

        modelBuilder.Entity<MoviesGenres>()
            .HasKey(x => new { x.GenreId, x.MovieId });

        modelBuilder.Entity<MovieTheatersMovies>()
            .HasKey(x => new { x.MovieTheaterId, x.MovieId });
        //modelBuilder.Entity<Actor>(entity =>
        //entity.Property(e => e.DateOfBirth).HasColumnType("timestamp"));

        base.OnModelCreating(modelBuilder);
    }


    public DbSet<Genre> Genres {  get; set;}
    public DbSet<Actor> Actors{ get; set; }
    public DbSet<MovieTheater> MovieTheaters { get; set; }
    public DbSet<Movie> Movies { get; set; }
    public DbSet<MoviesActors> MoviesActors { get; set; }
    public DbSet<MoviesGenres> MoviesGenres { get; set; }
    public DbSet<MovieTheatersMovies> MovieTheatersMovies { get; set; }
    public DbSet<Rating> Ratings  { get; set; }
}
