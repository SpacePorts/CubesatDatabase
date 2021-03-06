<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrbitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orbits', function (Blueprint $table) {
            $table->increments('id');
            $table->string("tle")->nullable();
            $table->string("COSPAR")->nullable();
            $table->string("satcat")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('orbits');
    }
}
