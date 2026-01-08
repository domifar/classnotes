using ClassNotes.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace ClassNotes.Api.Data
{
    public class NotesDbContext : DbContext
    {
        public NotesDbContext(DbContextOptions<NotesDbContext> options) : base(options) { }
        public DbSet<Note> Notes { get; set; }
    }
}