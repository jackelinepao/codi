﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PrimeraWebAPI_6;

namespace PrimeraWebAPI_6.Migrations
{
    [DbContext(typeof(CardContext))]
    [Migration("20191026171915_inicial")]
    partial class inicial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("PrimeraWebAPI_6.Models.Card", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.HasKey("id");

                    b.ToTable("Cards");
                });
#pragma warning restore 612, 618
        }
    }
}
