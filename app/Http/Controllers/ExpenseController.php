<?php

namespace App\Http\Controllers;

use App\Expense;
use App\Http\Requests\ExpenseRequest;
use Carbon\Carbon;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $currentMonthStart = Carbon::now()->startOfMonth();
        $currentMonthEnd = Carbon::now()->endOfMonth();

        return response()->json([
            'expenses' => Expense::whereBetween('date', [$currentMonthStart, $currentMonthEnd])->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ExpenseRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpenseRequest $request)
    {
        return response()->json(['expense' => Expense::create($request->all())]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(['expense' => Expense::find($id)]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ExpenseRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Database\Eloquent\MassAssignmentException
     */
    public function update(ExpenseRequest $request, $id)
    {
        $expense = Expense::find($id);
        $expense->fill($request->input('params'));
        return response()->json(['expense' => $expense]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        Expense::find($id)->delete();
        return response()->json(['destroyed' => $id]);
    }
}
